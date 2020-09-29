import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { ActivityIndicator, Keyboard } from 'react-native';
import { usePokemons } from '../../hooks/pokemons';
import logoImg from '../../assets/images/pokeball.png';
import colors from '../../global/styles/colors';

import Button from '../Button';
import { SelectRef } from '../Select';

import {
  Container,
  TobBar,
  BackButton,
  LogoImage,
  BottomBar,
  Title,
  HeaderRight,
  FiltersButtonContainer,
  ListOrderGroup,
  ListOrderLabel,
  DefaultOrderButton,
  NameOrderButton,
  FiltersButton,
  CleanFiltersContainer,
  CleanFilterButtonText,
  FilterButtonText,
  SearchForm,
  InputGroup,
  TypeSelect,
  NameSelect,
} from './styles';

export interface FilterOptions {
  typeFilter: string | undefined;
  nameFilter: string | undefined;
}

interface PageHeaderProps {
  title: string;
  loading?: boolean;
  hasFilter?: boolean;
  clearFilters?(): void;
  filtersSubmit?(filter: FilterOptions): void;
  onPressLeftButton(): void;
  onSelectOrder?(defaultOrder: boolean): void;
}

export interface PageHeaderRef {
  clear(): void;
}

const PageHeader: React.ForwardRefRenderFunction<
  PageHeaderRef,
  PageHeaderProps
> = (
  {
    title,
    loading = false,
    hasFilter = true,
  clearFilters = () => {}, //eslint-disable-line
  filtersSubmit = () => {}, //eslint-disable-line
  onSelectOrder = () => {}, //eslint-disable-line
    onPressLeftButton,
  },
  ref,
) => {
  const typeSelectRef = useRef<SelectRef>(null);
  const nameSelectRef = useRef<SelectRef>(null);

  const { types, names } = usePokemons();

  const [filtersVisible, setFiltersVisible] = useState(false);
  const [clearFiltersVisible, setClearFiltersVisible] = useState(false);
  const [typeFilter, setTypeFilter] = useState<string | undefined>(undefined);
  const [nameFilter, setNameFilter] = useState<string | undefined>(undefined);
  const [listDefaultOrder, setListDefaultOrder] = useState(true);

  useImperativeHandle(ref, () => ({
    clear() {
      handleClearFilters();
    },
  }));

  const handleToggleFiltersVisible = useCallback(async () => {
    setFiltersVisible((prevState) => !prevState);
  }, []);

  const handleTypeFilterChange = useCallback((value: string) => {
    setNameFilter(undefined);

    nameSelectRef.current?.clear();
    setTypeFilter(value);
  }, []);

  const handleNameFilterChange = useCallback((value: string) => {
    setTypeFilter(undefined);

    typeSelectRef.current?.clear();
    setNameFilter(value);
  }, []);

  const handleClearFilters = useCallback(() => {
    setClearFiltersVisible(false);
    setListDefaultOrder(true);

    clearFilters();

    setTypeFilter(undefined);
    setNameFilter(undefined);
  }, [clearFilters]);

  const handleClearTypeFilter = useCallback(() => {
    if (clearFiltersVisible) {
      setClearFiltersVisible(false);
      setListDefaultOrder(true);
      clearFilters();
    }

    setTypeFilter(undefined);
  }, [clearFiltersVisible, clearFilters]);

  const handleClearNameFilter = useCallback(() => {
    if (clearFiltersVisible) {
      setClearFiltersVisible(false);
      setListDefaultOrder(true);
      clearFilters();
    }

    setNameFilter(undefined);
  }, [clearFiltersVisible, clearFilters]);

  const handleFiltersSubmit = useCallback(() => {
    if (typeFilter || nameFilter) {
      handleToggleFiltersVisible();
      setClearFiltersVisible(true);
      setListDefaultOrder(true);
    }

    Keyboard.dismiss();

    filtersSubmit({ typeFilter, nameFilter });
  }, [filtersSubmit, handleToggleFiltersVisible, nameFilter, typeFilter]);

  const handleSelectOrder = useCallback(
    (defaultOrder: boolean) => {
      handleToggleFiltersVisible();
      setListDefaultOrder(defaultOrder);

      onSelectOrder(defaultOrder);
    },
    [handleToggleFiltersVisible, onSelectOrder],
  );

  return (
    <Container>
      <TobBar>
        <BackButton onPress={onPressLeftButton}>
          <MaterialIcon name="keyboard-backspace" size={24} color="#fff" />
        </BackButton>
        <LogoImage source={logoImg} resizeMode="contain" />
      </TobBar>
      <BottomBar>
        <Title>{title}</Title>

        {hasFilter && (
          <HeaderRight>
            <FiltersButtonContainer>
              <FiltersButton onPress={handleToggleFiltersVisible}>
                {(!loading && (
                  <>
                    <FilterButtonText>Filtrar </FilterButtonText>
                    <FeatherIcon
                      name="filter"
                      size={20}
                      color={filtersVisible ? colors.red : '#fff'}
                    />
                  </>
                )) || (
                  <ActivityIndicator
                    animating={loading}
                    size="large"
                    color="#FFF"
                  />
                )}
              </FiltersButton>
            </FiltersButtonContainer>

            {clearFiltersVisible && (
              <CleanFiltersContainer>
                <FiltersButton onPress={handleClearFilters}>
                  <CleanFilterButtonText>limpar filtros</CleanFilterButtonText>
                  <MaterialIcon name="clear" size={28} color={colors.red} />
                </FiltersButton>
              </CleanFiltersContainer>
            )}
          </HeaderRight>
        )}
      </BottomBar>

      {filtersVisible && (
        <SearchForm>
          <InputGroup>
            <TypeSelect
              ref={typeSelectRef}
              label="Tipo"
              options={types}
              selectedValue={typeFilter}
              onSelectValue={handleTypeFilterChange}
              onClearField={handleClearTypeFilter}
            />
            <NameSelect
              ref={nameSelectRef}
              label="Name"
              options={names}
              selectedValue={nameFilter}
              onSelectValue={handleNameFilterChange}
              onClearField={handleClearNameFilter}
            />
          </InputGroup>

          {clearFiltersVisible && (
            <ListOrderGroup>
              <DefaultOrderButton
                activeOpacity={0.8}
                onPress={() => handleSelectOrder(true)}
              >
                <ListOrderLabel>ordem padrão </ListOrderLabel>
                <MaterialIcon
                  name={
                    listDefaultOrder
                      ? 'radio-button-checked'
                      : 'radio-button-unchecked'
                  }
                  size={24}
                  color="#fff"
                />
              </DefaultOrderButton>

              <NameOrderButton
                activeOpacity={0.8}
                onPress={() => handleSelectOrder(false)}
              >
                <MaterialIcon
                  name={
                    !listDefaultOrder
                      ? 'radio-button-checked'
                      : 'radio-button-unchecked'
                  }
                  size={24}
                  color="#fff"
                />
                <ListOrderLabel> ordem alfabética</ListOrderLabel>
              </NameOrderButton>
            </ListOrderGroup>
          )}

          <Button
            style={{ marginTop: !clearFiltersVisible ? 16 : 8 }}
            title="Filtrar"
            loading={loading}
            onPress={handleFiltersSubmit}
          />
        </SearchForm>
      )}
    </Container>
  );
};

export default forwardRef(PageHeader);
