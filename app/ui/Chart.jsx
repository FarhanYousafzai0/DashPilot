
"use client"
import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const AreaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [{
        name: 'Series 1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Series 2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true
          }
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.3,
          stops: [0, 90, 100]
        }
      },
      colors: ['#4f46e5', '#10b981'],
      xaxis: {
        type: 'datetime',
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ],
        labels: {
          style: {
            colors: '#6b7280',
            fontSize: '12px'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#6b7280',
            fontSize: '12px'
          },
          formatter: function (value) {
            return value.toFixed(0);
          }
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
        style: {
          fontSize: '12px'
        }
      },
      grid: {
        borderColor: '#e5e7eb',
        strokeDashArray: 4,
        padding: {
          top: 20,
          right: 20,
          bottom: 0,
          left: 20
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        fontSize: '14px',
        markers: {
          radius: 12
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5
        }
      }
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full p-4 bg-white rounded-lg mt-4 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Performance Overview</h2>
        
      </div>
      <div id="chart" ref={chartRef} className="w-full" />
    </div>
  );
};

export default AreaChart;