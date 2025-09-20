import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { CalendarModelProperties } from './properties';
import {
  ButtonFilter,
  ButtonFilterText,
  Container,
  ModalContent,
} from './styles';
import { useState } from 'react';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { MarkedDates } from 'react-native-calendars/src/types';
import { ptBR } from './locale.calendar';

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});

LocaleConfig.locales['pt-BR'] = ptBR;
LocaleConfig.defaultLocale = 'pt-BR';

export default function CalendarModal(properties: CalendarModelProperties) {
  const [dateNow, setDateNow] = useState(new Date());
  const [marketDates, setMarketDates] = useState<MarkedDates>({});

  const handleDayPress = (date: DateData) => {
    setDateNow(new Date(date.dateString));

    let marketDay = {} as MarkedDates;

    marketDay[date.dateString] = {
      selected: true,
      selectedColor: '#3d3dbf',
      textColor: '#ffffff',
    };

    setMarketDates(marketDay);
  };

  const handleFilterDate = () => {
    if (properties.onFilter) {
      properties.onFilter(dateNow);
    }

    if (properties.onSetVisible) {
      properties.onSetVisible();
    }
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={properties.onSetVisible}>
        <View style={styles.flexOne} />
      </TouchableWithoutFeedback>

      <ModalContent>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={marketDates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#ff0000',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
          }}
        />
        <ButtonFilter activeOpacity={0.8} onPress={handleFilterDate}>
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  );
}
