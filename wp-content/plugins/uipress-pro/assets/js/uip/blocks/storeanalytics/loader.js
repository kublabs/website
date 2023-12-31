const { __, _x, _n, _nx } = wp.i18n;
const uipress = new window.uipClass();
export function fetchBlocks() {
  return [
    /**
     * Text input block
     * @since 3.0.0
     */
    {
      name: __('WC charts', 'uipress-pro'),
      moduleName: 'uip-woocommerce-analytics-charts',
      description: __('Outputs your choice of order data from woocommerce as a chart', 'uipress-pro'),
      group: 'storeanalytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/storeanalytics/woocommerce-analytics-charts.min.js',
      icon: 'bar_chart',
      settings: {},
      optionsEnabled: [
        //Block options group
        {
          name: 'block',
          label: __('Block options', 'uipress-pro'),
          icon: 'check_box_outline_blank',
          options: [
            {
              option: 'title',
              uniqueKey: 'chartName',
              label: __('Chart title', 'uipress-pro'),
              value: {
                string: __('Sales chart', 'uipress-pro'),
              },
            },
            {
              option: 'defaultSelect',
              uniqueKey: 'chartDataType',
              label: __('Chart metric', 'uipress-pro'),
              args: {
                options: [
                  {
                    value: 'total_orders',
                    label: __('Total orders', 'uipress-pro'),
                  },
                  {
                    value: 'total_revenue',
                    label: __('Total revenue', 'uipress-pro'),
                  },
                  {
                    value: 'failed_orders',
                    label: __('Failed orders', 'uipress-pro'),
                  },
                  {
                    value: 'refunded_orders',
                    label: __('Refunded orders', 'uipress-pro'),
                  },
                ],
              },
              value: '',
            },
            {
              option: 'choiceSelect',
              uniqueKey: 'chartStyle',
              label: __('Chart type', 'uipress-pro'),
              args: {
                options: {
                  line: {
                    value: 'line',
                    label: __('Line', 'uipress-pro'),
                  },
                  bar: {
                    value: 'bar',
                    label: __('Bar', 'uipress-pro'),
                  },
                },
              },
              value: {
                value: 'line',
              },
            },
            { option: 'number', uniqueKey: 'dateRange', label: __('Default date range (days)', 'uipress-pro'), value: 14 },
            { option: 'color-select', uniqueKey: 'chartColour', label: __('Line colour', 'uipress-pro') },
            { option: 'color-select', uniqueKey: 'chartCompColour', label: __('Comparison line colour', 'uipress-pro') },
            { option: 'chartOptions', uniqueKey: 'chartOptions', label: __('Chart style', 'uipress-pro') },
            {
              option: 'choiceSelect',
              uniqueKey: 'hideChart',
              label: __('Chart', 'uipress-pro'),
              value: {
                value: false,
              },
              args: {
                options: {
                  false: {
                    value: false,
                    label: __('Show', 'uipress-pro'),
                  },
                  true: {
                    value: true,
                    label: __('Hide', 'uipress-pro'),
                  },
                },
              },
            },
          ],
        },
        //Container options group
        {
          name: 'container',
          label: __('Block container', 'uipress-pro'),
          icon: 'crop_free',
          styleType: 'style',
          options: uipress.returnBlockConatinerOptions(),
        },
        //Container options group
        {
          name: 'style',
          label: __('Style', 'uipress-pro'),
          icon: 'palette',
          styleType: 'style',
          options: uipress.returnDefaultOptions(),
        },
        //Container options group
        {
          name: 'title',
          label: __('Table title', 'uipress-pro'),
          icon: 'title',
          styleType: 'style',
          class: '.uip-chart-title',
          options: uipress.returnDefaultOptions(),
        },
        //Container options group
        {
          name: 'chartCanvas',
          label: __('Chart canvas', 'uipress-pro'),
          icon: 'monitoring',
          styleType: 'style',
          class: '.uip-chart-canvas',
          options: uipress.returnDefaultOptions(),
        },
        //Container options group
        {
          name: 'chartLabels',
          label: __('Chart labels', 'uipress-pro'),
          icon: 'input',
          styleType: 'style',
          class: '.uip-chart-label',
          options: uipress.returnDefaultOptions(),
        },
        //Container options group
        {
          name: 'percentChange',
          label: __('Percentage change', 'uipress-pro'),
          icon: 'label',
          styleType: 'style',
          class: '.uip-tag-label',
          options: uipress.returnDefaultOptions(),
        },
        //Advanced options group
        {
          name: 'advanced',
          label: __('Advanced', 'uipress-pro'),
          icon: 'code',
          options: uipress.returnAdvancedOptions(),
        },
      ],
    },
    /**
     * Text input block
     * @since 3.0.0
     */
    {
      name: __('WC tables', 'uipress-pro'),
      moduleName: 'uip-woocommerce-analytics-tables',
      description: __('Outputs your choice of order data from woocommerce as a table', 'uipress-pro'),
      group: 'storeanalytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/storeanalytics/woocommerce-analytics-tables.min.js',
      icon: 'table_chart',
      settings: {},
      optionsEnabled: [
        //Block options group
        {
          name: 'block',
          label: __('Block options', 'uipress-pro'),
          icon: 'check_box_outline_blank',
          options: [
            {
              option: 'title',
              uniqueKey: 'chartName',
              label: __('Chart title', 'uipress-pro'),
              value: {
                string: __('Store products', 'uipress-pro'),
              },
            },
            {
              option: 'defaultSelect',
              uniqueKey: 'chartDataType',
              label: __('Chart metric', 'uipress-pro'),
              args: {
                options: [
                  {
                    value: 'top_products_revenue',
                    label: __('Top products by revenue', 'uipress-pro'),
                  },
                  {
                    value: 'top_products_quantity',
                    label: __('Top products by quantity', 'uipress-pro'),
                  },
                ],
              },
              value: '',
            },
            { option: 'number', uniqueKey: 'dateRange', label: __('Default date range (days)', 'uipress-pro'), value: 14 },
          ],
        },
        //Container options group
        {
          name: 'container',
          label: __('Block container', 'uipress-pro'),
          icon: 'crop_free',
          styleType: 'style',
          options: uipress.returnBlockConatinerOptions(),
        },
        //Container options group
        {
          name: 'style',
          label: __('Style', 'uipress-pro'),
          icon: 'palette',
          styleType: 'style',
          options: uipress.returnDefaultOptions(),
        },
        //Container options group
        {
          name: 'title',
          label: __('Table title', 'uipress-pro'),
          icon: 'title',
          styleType: 'style',
          class: '.uip-chart-title',
          options: uipress.returnDefaultOptions(),
        },
        ///Dates
        {
          name: 'dates',
          label: __('Dates', 'uipress-pro'),
          icon: 'date_range',
          styleType: 'style',
          class: '.uip-dates',
          options: uipress.returnDefaultOptions(),
        },
        //Container options group
        {
          name: 'table',
          label: __('Table', 'uipress-pro'),
          icon: 'table',
          styleType: 'style',
          class: '.uip-table',
          options: uipress.returnDefaultOptions(),
        },
        //Container options group
        {
          name: 'percentChange',
          label: __('Percentage change', 'uipress-pro'),
          icon: 'label',
          styleType: 'style',
          class: '.uip-tag-label',
          options: uipress.returnDefaultOptions(),
        },
        //Advanced options group
        {
          name: 'advanced',
          label: __('Advanced', 'uipress-pro'),
          icon: 'code',
          options: uipress.returnAdvancedOptions(),
        },
      ],
    },

    {
      name: __('WC map', 'uipress-pro'),
      moduleName: 'uip-woocommerce-analytics-map',
      description: __('Outputs order data from woocommerce as a interactive map', 'uipress-pro'),
      group: 'storeanalytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/storeanalytics/woocommerce-analytics-map.min.js',
      icon: 'map',
      settings: {},
      optionsEnabled: [
        //Block options group
        {
          name: 'block',
          label: __('Block options', 'uipress-pro'),
          icon: 'check_box_outline_blank',
          options: [
            {
              option: 'title',
              uniqueKey: 'chartName',
              label: __('Chart title', 'uipress-pro'),
              value: {
                string: __('Sales map', 'uipress-pro'),
              },
            },
            {
              option: 'defaultSelect',
              uniqueKey: 'chartDataType',
              label: __('Chart metric', 'uipress-pro'),
              args: {
                options: [
                  {
                    value: 'total_orders',
                    label: __('Total orders', 'uipress-pro'),
                  },
                  {
                    value: 'total_revenue',
                    label: __('Total revenue', 'uipress-pro'),
                  },
                  {
                    value: 'failed_orders',
                    label: __('Failed orders', 'uipress-pro'),
                  },
                  {
                    value: 'refunded_orders',
                    label: __('Refunded orders', 'uipress-pro'),
                  },
                ],
              },
              value: '',
            },
            { option: 'number', uniqueKey: 'dateRange', label: __('Default date range (days)', 'uipress-pro'), value: 14 },
            {
              option: 'choiceSelect',
              uniqueKey: 'darkMode',
              label: __('Map style', 'uipress-pro'),
              value: {
                value: false,
              },
              args: {
                options: {
                  false: {
                    value: false,
                    label: __('Light', 'uipress-pro'),
                  },
                  true: {
                    value: true,
                    label: __('Dark', 'uipress-pro'),
                  },
                },
              },
            },
          ],
        },
        //Container options group
        {
          name: 'container',
          label: __('Block container', 'uipress-pro'),
          icon: 'crop_free',
          styleType: 'style',
          options: uipress.returnBlockConatinerOptions(),
        },
        //Container options group
        {
          name: 'style',
          label: __('Style', 'uipress-pro'),
          icon: 'palette',
          styleType: 'style',
          options: uipress.returnDefaultOptions(),
        },
        //Container options group
        {
          name: 'title',
          label: __('Chart title', 'uipress-pro'),
          icon: 'title',
          styleType: 'style',
          class: '.uip-chart-title',
          options: uipress.returnDefaultOptions(),
        },
        ///Dates
        {
          name: 'dates',
          label: __('Dates', 'uipress-pro'),
          icon: 'date_range',
          styleType: 'style',
          class: '.uip-dates',
          options: uipress.returnDefaultOptions(),
        },
        //Container options group
        {
          name: 'map',
          label: __('Map', 'uipress-pro'),
          icon: 'map',
          styleType: 'style',
          class: '.uip-wc-map',
          options: uipress.returnDefaultOptions(),
        },
        //Advanced options group
        {
          name: 'advanced',
          label: __('Advanced', 'uipress-pro'),
          icon: 'code',
          options: uipress.returnAdvancedOptions(),
        },
      ],
    },
  ];
}
