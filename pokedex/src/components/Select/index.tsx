import React, { useCallback, useEffect, useState } from 'react';
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
  clearField(): void;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  selectedValue,
  onSelectValue,
  clearField,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [query, setQuery] = useState(selectedValue);

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
    clearField();

    setQuery(undefined);
    onSelectValue(undefined);
  }, [clearField, onSelectValue]);

  return (
    <Container>
      <Label>{label}</Label>

      <SelectField style={{ flex: 1, position: 'relative' }}>
        <SelectContainer>
          <SelectInput
            autoCorrect={false}
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
export default Select;
