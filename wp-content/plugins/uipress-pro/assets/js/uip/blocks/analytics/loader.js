const { __, _x, _n, _nx } = wp.i18n;
const uipress = new window.uipClass();
export function fetchBlocks() {
  return [
    /**
     * Text input block
     * @since 3.0.0
     */
    {
      name: __('GA charts', 'uipress-pro'),
      moduleName: 'uip-google-analytics',
      description: __('Outputs your choice of charts and options on what data to display', 'uipress-pro'),
      category: __('Analytics', 'uipress-pro'),
      group: 'analytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/analytics/google-analytics-charts.min.js',
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
                string: __('Analytics chart', 'uipress-pro'),
              },
            },
            {
              option: 'defaultSelect',
              uniqueKey: 'chartDataType',
              label: __('Chart metric', 'uipress-pro'),
              args: {
                options: [
                  {
                    value: 'totalUsers',
                    label: __('Users', 'uipress-pro'),
                  },
                  {
                    value: 'totalRevenue',
                    label: __('Revenue', 'uipress-pro'),
                  },
                  {
                    value: 'sessions',
                    label: __('Sessions', 'uipress-pro'),
                  },
                  {
                    value: 'screenPageViews',
                    label: __('Page views', 'uipress-pro'),
                  },
                  {
                    value: 'purchaserConversionRate',
                    label: __('Conversion rate', 'uipress-pro'),
                  },
                  {
                    value: 'engagementRate',
                    label: __('Engagement rate', 'uipress-pro'),
                  },
                  {
                    value: 'ecommercePurchases',
                    label: __('Purchases', 'uipress-pro'),
                  },
                  {
                    value: 'checkouts',
                    label: __('Checkouts', 'uipress-pro'),
                  },
                  {
                    value: 'addToCarts',
                    label: __('Add to carts', 'uipress-pro'),
                  },
                  {
                    value: 'userEngagementDuration',
                    label: __('Average engagement time', 'uipress-pro'),
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
            {
              option: 'choiceSelect',
              uniqueKey: 'inlineAccountSwitch',
              label: __('Switch account option', 'uipress-pro'),
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
      name: __('GA tables', 'uipress-pro'),
      moduleName: 'uip-google-analytics-tables',
      description: __('Outputs your choice of tables and options on what data to display', 'uipress-pro'),
      category: __('Analytics', 'uipress-pro'),
      group: 'analytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/analytics/google-analytics-tables.min.js',
      icon: 'table',
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
                string: __('Analytics table', 'uipress-pro'),
              },
            },
            {
              option: 'defaultSelect',
              uniqueKey: 'chartDataType',
              label: __('Chart metric', 'uipress-pro'),
              args: {
                options: [
                  {
                    value: 'cities',
                    label: __('Visits by City', 'uipress-pro'),
                  },
                  {
                    value: 'countries',
                    label: __('Visits by Country', 'uipress-pro'),
                  },
                  {
                    value: 'sources',
                    label: __('Visits by source', 'uipress-pro'),
                  },
                  {
                    value: 'paths',
                    label: __('Visits by page', 'uipress-pro'),
                  },
                  {
                    value: 'events',
                    label: __('Events', 'uipress-pro'),
                  },
                  {
                    value: 'devices',
                    label: __('Devices', 'uipress-pro'),
                  },
                ],
              },
              value: '',
            },
            { option: 'number', uniqueKey: 'dateRange', label: __('Default date range (days)', 'uipress-pro'), value: 14 },
            {
              option: 'choiceSelect',
              uniqueKey: 'inlineAccountSwitch',
              label: __('Switch account option', 'uipress-pro'),
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
      name: __('GA map', 'uipress-pro'),
      moduleName: 'uip-google-analytics-map',
      description: __('Outputs your visitor data to a interactive map', 'uipress-pro'),
      category: __('Analytics', 'uipress-pro'),
      group: 'analytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/analytics/google-analytics-map.min.js',
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
                string: __('Analytics table', 'uipress-pro'),
              },
            },
            {
              option: 'defaultSelect',
              uniqueKey: 'chartDataType',
              label: __('Chart metric', 'uipress-pro'),
              args: {
                options: [
                  {
                    value: 'countries',
                    label: __('Visits by Country', 'uipress-pro'),
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

            {
              option: 'choiceSelect',
              uniqueKey: 'inlineAccountSwitch',
              label: __('Switch account option', 'uipress-pro'),
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
          class: '.uip-ga-map',
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
      name: __('GA realtime', 'uipress-pro'),
      moduleName: 'uip-google-realtime',
      description: __('Displays live visitor data about your site', 'uipress-pro'),
      category: __('Analytics', 'uipress-pro'),
      group: 'analytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/analytics/google-analytics-realtime.min.js',
      icon: 'schedule',
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
                string: __('Analytics realtime', 'uipress-pro'),
              },
            },
            {
              option: 'defaultSelect',
              uniqueKey: 'chartDataType',
              label: __('Chart metric', 'uipress-pro'),
              args: {
                options: [
                  {
                    value: 'activeUsers',
                    label: __('Active users', 'uipress-pro'),
                  },
                  {
                    value: 'conversions',
                    label: __('Conversions', 'uipress-pro'),
                  },
                ],
              },
              value: '',
            },
            { option: 'color-select', uniqueKey: 'chartColour', label: __('Line colour', 'uipress-pro') },
            { option: 'chartOptions', uniqueKey: 'chartOptions', label: __('Chart style', 'uipress-pro') },
            {
              option: 'choiceSelect',
              uniqueKey: 'inlineAccountSwitch',
              label: __('Switch account option', 'uipress-pro'),
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
            ,
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
          name: 'chartLabels',
          label: __('Chart labels', 'uipress-pro'),
          icon: 'input',
          styleType: 'style',
          class: '.uip-chart-label',
          options: uipress.returnDefaultOptions(),
        },
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
    ////////////
    //MATOMO////
    ////////////
    {
      name: __('Matomo charts', 'uipress-pro'),
      moduleName: 'uip-matomo-analytics-chart',
      description: __('Outputs your choice of charts and options on what data to display from Matomo analytics', 'uipress-pro'),
      category: __('Analytics', 'uipress-pro'),
      group: 'analytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/analytics/matomo-analytics-charts.min.js',
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
                string: __('Analytics chart', 'uipress-pro'),
              },
            },
            {
              option: 'defaultSelect',
              uniqueKey: 'chartDataType',
              label: __('Chart metric', 'uipress-pro'),
              args: {
                options: [
                  {
                    value: 'users_per_day',
                    label: __('Users per day', 'uipress-pro'),
                  },
                  {
                    value: 'visits_per_day',
                    label: __('Visits per day', 'uipress-pro'),
                  },
                  {
                    value: 'page_views',
                    label: __('Page views per day', 'uipress-pro'),
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
            {
              option: 'choiceSelect',
              uniqueKey: 'inlineAccountSwitch',
              label: __('Switch account option', 'uipress-pro'),
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
    //Matomo tables
    {
      name: __('Matomo tables', 'uipress-pro'),
      moduleName: 'uip-matomo-tables',
      description: __('Outputs a table summary of selected matomo analytics data', 'uipress-pro'),
      category: __('Analytics', 'uipress-pro'),
      group: 'analytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/analytics/matomo-analytics-tables.min.js',
      icon: 'table',
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
                string: __('Analytics table', 'uipress-pro'),
              },
            },
            {
              option: 'defaultSelect',
              uniqueKey: 'chartDataType',
              label: __('Chart metric', 'uipress-pro'),
              args: {
                options: [
                  {
                    value: 'city_visits',
                    label: __('Visits by City', 'uipress-pro'),
                  },
                  {
                    value: 'country_visits',
                    label: __('Visits by Country', 'uipress-pro'),
                  },
                  {
                    value: 'traffic_sources',
                    label: __('Visits by source', 'uipress-pro'),
                  },
                  {
                    value: 'visits_by_page',
                    label: __('Visits by page', 'uipress-pro'),
                  },
                  {
                    value: 'device_visits',
                    label: __('Devices', 'uipress-pro'),
                  },
                ],
              },
              value: '',
            },
            { option: 'number', uniqueKey: 'dateRange', label: __('Default date range (days)', 'uipress-pro'), value: 14 },
            {
              option: 'choiceSelect',
              uniqueKey: 'inlineAccountSwitch',
              label: __('Switch account option', 'uipress-pro'),
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
    //Matomo map
    {
      name: __('Matomo map', 'uipress-pro'),
      moduleName: 'uip-matomo-analytics-map',
      description: __('Outputs your matomo visitor data to a interactive map', 'uipress-pro'),
      category: __('Analytics', 'uipress-pro'),
      group: 'analytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/analytics/matomo-analytics-map.min.js',
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
                string: __('Analytics table', 'uipress-pro'),
              },
            },
            {
              option: 'defaultSelect',
              uniqueKey: 'chartDataType',
              label: __('Chart metric', 'uipress-pro'),
              args: {
                options: [
                  {
                    value: 'country_visits',
                    label: __('Visits by Country', 'uipress-pro'),
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

            {
              option: 'choiceSelect',
              uniqueKey: 'inlineAccountSwitch',
              label: __('Switch account option', 'uipress-pro'),
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
          class: '.uip-ga-map',
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

    ////////////
    //FATHOM////
    ////////////
    {
      name: __('Fathom charts', 'uipress-pro'),
      moduleName: 'uip-fathom-analytics-chart',
      description: __('Outputs your choice of charts and options on what data to display from Fathom analytics', 'uipress-pro'),
      category: __('Analytics', 'uipress-pro'),
      group: 'analytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/analytics/fathom-analytics-charts.min.js',
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
                string: __('Analytics chart', 'uipress-pro'),
              },
            },
            {
              option: 'defaultSelect',
              uniqueKey: 'chartDataType',
              label: __('Chart metric', 'uipress-pro'),
              args: {
                options: [
                  {
                    value: 'uniques',
                    label: __('Users per day', 'uipress-pro'),
                  },
                  {
                    value: 'visits',
                    label: __('Visits per day', 'uipress-pro'),
                  },
                  {
                    value: 'pageviews',
                    label: __('Page views per day', 'uipress-pro'),
                  },
                  {
                    value: 'bounce_rate',
                    label: __('Bounce rate', 'uipress-pro'),
                  },
                  {
                    value: 'avg_duration',
                    label: __('Average duration', 'uipress-pro'),
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
            {
              option: 'choiceSelect',
              uniqueKey: 'inlineAccountSwitch',
              label: __('Switch account option', 'uipress-pro'),
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

    //Fathom realtime
    {
      name: __('Fathom realtime', 'uipress-pro'),
      moduleName: 'uip-fathom-analytics-realtime',
      description: __('Outputs realtime site visitor data from Fathom analytics', 'uipress-pro'),
      category: __('Analytics', 'uipress-pro'),
      group: 'analytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/analytics/fathom-analytics-realtime.min.js',
      icon: 'schedule',
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
                string: __('Active now', 'uipress-pro'),
              },
            },

            {
              option: 'choiceSelect',
              uniqueKey: 'inlineAccountSwitch',
              label: __('Switch account option', 'uipress-pro'),
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
        //Advanced options group
        {
          name: 'advanced',
          label: __('Advanced', 'uipress-pro'),
          icon: 'code',
          options: uipress.returnAdvancedOptions(),
        },
      ],
    },

    //Fathom map
    {
      name: __('Fathom map', 'uipress-pro'),
      moduleName: 'uip-fathom-analytics-map',
      description: __('Outputs your fathom visitor data to a interactive map', 'uipress-pro'),
      category: __('Analytics', 'uipress-pro'),
      group: 'analytics',
      premium: true,
      path: uipProPath + 'assets/js/uip/blocks/analytics/fathom-analytics-map.min.js',
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
                string: __('Analytics table', 'uipress-pro'),
              },
            },
            {
              option: 'defaultSelect',
              uniqueKey: 'chartDataType',
              label: __('Chart metric', 'uipress-pro'),
              args: {
                options: [
                  {
                    value: 'country_reports',
                    label: __('Visits by Country', 'uipress-pro'),
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

            {
              option: 'choiceSelect',
              uniqueKey: 'inlineAccountSwitch',
              label: __('Switch account option', 'uipress-pro'),
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
          class: '.uip-ga-map',
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
