import React, { useCallback, useState } from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  BorderlessButton,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import { ActivityIndicator, Keyboard } from 'react-native';
import { usePokemons } from '../../hooks/pokemons';
import logoImg from '../../assets/images/pokeball.png';
import colors from '../../global/styles/colors';

import Input from '../Input';
import Button from '../Button';
import Select from '../Select';

import {
  Container,
  TobBar,
  LogoImage,
  BottomBar,
  Title,
  HeaderRight,
  FiltersButtonContainer,
  CleanFiltersContainer,
  CleanFilterButtonText,
  FilterButtonText,
  SearchForm,
  InputGroup,
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
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  loading = false,
  hasFilter = true,
  clearFilters = () => {}, //eslint-disable-line
  filtersSubmit = () => {}, //eslint-disable-line
  onPressLeftButton,
}) => {
  const { types } = usePokemons();

  const [filtersVisible, setFiltersVisible] = useState(false);
  const [clearFiltersVisible, setClearFiltersVisible] = useState(false);
  const [typeFilter, setTypeFilter] = useState<string | undefined>(undefined);
  const [nameFilter, setNameFilter] = useState<string | undefined>(undefined);

  const handleToggleFiltersVisible = useCallback(async () => {
    setFiltersVisible((prevState) => !prevState);
  }, []);

  const handleTypeFilterChange = useCallback((value: string) => {
    setNameFilter(undefined);

    setTypeFilter(value);
  }, []);

  const handleNameFilterChange = useCallback((value: string) => {
    setTypeFilter(undefined);

    setNameFilter(value);
  }, []);

  const handleClearFilters = useCallback(() => {
    setClearFiltersVisible(false);

    clearFilters();

    setTypeFilter(undefined);
    setNameFilter(undefined);
  }, [clearFilters]);

  const handleClearTypeFilter = useCallback(() => {
    if (clearFiltersVisible) {
      setClearFiltersVisible(false);
      clearFilters();
    }

    setTypeFilter(undefined);
  }, [clearFiltersVisible, clearFilters]);

  const handleClearNameFilter = useCallback(() => {
    if (clearFiltersVisible) {
      setClearFiltersVisible(false);
      clearFilters();
    }

    setNameFilter(undefined);
  }, [clearFiltersVisible, clearFilters]);

  const handleFiltersSubmit = useCallback(() => {
    if (typeFilter || nameFilter) {
      handleToggleFiltersVisible();
      setClearFiltersVisible(true);
    }

    Keyboard.dismiss();

    filtersSubmit({ typeFilter, nameFilter });
  }, [filtersSubmit, handleToggleFiltersVisible, nameFilter, typeFilter]);

  return (
    <Container>
      <TobBar>
        <BorderlessButton onPress={onPressLeftButton}>
          <MaterialIcon name="keyboard-backspace" size={24} color="#fff" />
        </BorderlessButton>
        <LogoImage source={logoImg} resizeMode="contain" />
      </TobBar>
      <BottomBar>
        <Title>{title}</Title>

        {hasFilter && (
          <HeaderRight>
            <FiltersButtonContainer>
              <BorderlessButton
                style={{ flexDirection: 'row' }}
                onPress={handleToggleFiltersVisible}
              >
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
              </BorderlessButton>
            </FiltersButtonContainer>

            {clearFiltersVisible && (
              <CleanFiltersContainer>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={handleClearFilters}
                >
                  <CleanFilterButtonText>limpar filtros</CleanFilterButtonText>
                  <MaterialIcon name="clear" size={28} color={colors.red} />
                </TouchableOpacity>
              </CleanFiltersContainer>
            )}
          </HeaderRight>
        )}
      </BottomBar>

      {filtersVisible && (
        <SearchForm>
          <InputGroup>
            <Select
              label="Tipo"
              options={types}
              selectedValue={typeFilter}
              onSelectValue={handleTypeFilterChange}
              clearField={handleClearTypeFilter}
            />
            <Input
              label="Nome"
              value={nameFilter}
              onChangeText={handleNameFilterChange}
              clearField={handleClearNameFilter}
            />
          </InputGroup>

          <Button
            title="Filtrar"
            loading={loading}
            onPress={handleFiltersSubmit}
          />
        </SearchForm>
      )}
    </Container>
  );
};

export default PageHeader;
