import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend } from '@syncfusion/ej2-react-charts';
import './chart.css'
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis } from '../../data/dummy';
import ChartsHeader from '../ChartsHeader'
import { useStateContext } from '../../contexts/ContextProvider';

const Chart = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="chart-container">
      <ChartsHeader title="Registered Users in a week" />
      <input type="date" className="date" name="data"/>
      <div className="chats">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ mode: 'Range', background: 'white' }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USERS"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 5,
                topRight: 5,
              }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Chart;