$(function () {
var chart = c3.generate({
    bindto: '#area-chart',
    data: {
        columns: [
            ['Visitors', 999, 350, 300, 0, 0, 0],
            ['Conversions', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            Visitors: 'area',
            Conversions: 'area-spline'
        }
    },
    axis: {
        x: {
            label: 'X Label'
        },
        y: {
            label: 'Y Label'
        },
        y2: {
            show: true,
            label: 'Y2 Label'
        }
    }
});

});

$(function () {
var chart = c3.generate({
    bindto: '#performance-chart',
    data: {
        x: 'x',
        columns: [
            ['x', '14', '13', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0'],
            ['Overall Health', 70, 69, 69, 66, 68, 71, 72, 75, 76, 76, 78, 78, 79, 78, 80]
        ]
    },
    axis: {
        x: {
            label: 'Days Ago TODO: fix Axis ticks',
            tick: {
                format: function (x) { return x }
            }
        },
        y: {
            label: 'Health Score'
        }
    }
});

});

$(function () {
var chart = c3.generate({
    bindto: '#retention-chart',
    data: {
        columns: [
            ['Organic', 100, 70, 65, 64, 54, 30, 20, 18, 17, 17, 16, 10, 10],
            ['Referral', 100, 75, 74, 40, 34, 34, 33, 33, 30, 28, 10, 8, 5],
            ['Social', 100, 90, 30, 29, 28, 27, 26, 25, 20, 14, 12, 8, 0],
            ['Direct', 100, 95, 86, 72, 51, 50, 48, 47, 45, 30, 30, 29, 29]
        ]
    },
    axis: {
        x: {
            label: 'Months after Conversion'
        },
        y: {
            label: 'Percentage of customers Remaining'
        }
    }
});

});

$(function () {
var chart = c3.generate({
     bindto: '#combination-chart',
    data: {
        columns: [
            ['data1', 30, 20, 50, 40, 60, 50],
            ['data2', 200, 130, 90, 240, 130, 220],
            ['data3', 300, 200, 160, 400, 250, 250],
            ['data4', 200, 130, 90, 240, 130, 220],
            ['data5', 130, 120, 150, 140, 160, 150],
            ['data6', 90, 70, 20, 50, 60, 120],
        ],
        type: 'bar',
        types: {
            data3: 'spline',
            data4: 'line',
            data6: 'area',
        },
        groups: [
            ['data1','data2']
        ]
    },
    axis: {
        x: {
            type: 'categorized'
        }
    }
});
});

$(function () {
      var chart = c3.generate({
         bindto: '#zoom',
        data: {
          columns: [
            ['sample', 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 150, 250, 150, 200, 170, 240, 100, 150, 250, 150, 200, 170, 240, 30, 200, 100, 400, 150, 250, 150, 200, 170, 240, 350, 150, 100, 400, 350, 220, 250, 300, 270, 140, 150, 90, 150, 50, 120, 70, 40]
          ]
        },
        zoom: {
          enabled: true
        }
      });
});
