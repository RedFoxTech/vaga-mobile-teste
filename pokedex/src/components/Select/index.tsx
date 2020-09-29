import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../global/styles/colors';

import {
  Container,
  SelectField,
  Label,
  SelectContainer,
  SelectInput,
  OptionText,
  ClearFilterButton,
} from './styles';

interface SelectProps {
  label: string;
  options: Array<string>;
  selectedValue: string | undefined;
  onSelectValue(value: string | undefined): void;
  onClearField(): void;
}

export interface SelectRef {
  clear(): void;
}

const Select: React.ForwardRefRenderFunction<SelectRef, SelectProps> = (
  { label, options, selectedValue, onSelectValue, onClearField, ...rest },
  ref,
) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [query, setQuery] = useState(selectedValue);

  useImperativeHandle(ref, () => ({
    clear() {
      setQuery(undefined);
    },
  }));

  useEffect(() => {
    if (query) {
      setFilteredOptions([]);

      const regex = new RegExp(`${query.trim().toLowerCase()}`, 'i');

      setFilteredOptions(options.filter((item) => item.search(regex) >= 0));
    }
  }, [options, query]);

  const handleSelect = useCallback(
    (item) => {
      setQuery(item);

      onSelectValue(item);
    },
    [onSelectValue],
  );

  const handleClearField = useCallback(() => {
    onClearField();

    setQuery(undefined);
    onSelectValue(undefined);
  }, [onClearField, onSelectValue]);

  return (
    <Container {...rest}>
      <Label>{label}</Label>

      <SelectField style={{ flex: 1, position: 'relative' }}>
        <SelectContainer>
          <SelectInput
            autoCorrect={false}
            flatListProps={{
              contentContainerStyle: {
                paddingBottom: 20,
              },
              style: {
                maxHeight: 45,
                backgroundColor: '#fff',
                borderRadius: 8,
              },
            }}
            data={
              (query &&
                query !== '' &&
                filteredOptions[0] !== query &&
                filteredOptions) ||
              []
            }
            defaultValue={query}
            value={selectedValue}
            onChangeText={handleSelect}
            keyExtractor={(item: string) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)}>
                <OptionText>{String(item)}</OptionText>
              </TouchableOpacity>
            )}
          />
        </SelectContainer>

        <ClearFilterButton>
          <TouchableWithoutFeedback onPress={handleClearField}>
            <MaterialIcon name="clear" size={24} color={colors.primary} />
          </TouchableWithoutFeedback>
        </ClearFilterButton>
      </SelectField>
    </Container>
  );
};
export default forwardRef(Select);
