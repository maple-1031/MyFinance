var data = {
  labels: ["1月", "2月", "3月", "4月", "5月"],
  datasets: [{
      label: 'プリンター',
      data: [880, 740, 900, 520, 930],
      backgroundColor: 'rgba(255, 100, 100, 1)'
  },
  {
      label: 'パソコン',
      data: [1200, 1350, 1220, 1220, 1420],
      backgroundColor: 'rgba(100, 100, 255, 1)'
  }]
};

var options = {
  scales: {
      xAxes: [{
          scaleLabel: {
              display: true,
              labelString: '月'
          }
      }],
      yAxes: [{
          ticks: {
              min: 0,
              userCallback: function(tick) {
                  return tick.toString() + '台';
              }
          },
          scaleLabel: {
              display: true,
              labelString: '台数'
          }
      }]
  },
  title: {
      display: true,
      text: '販売台数'
  }
};

var ctx = document.getElementById("stack");
var ex_chart = new Chart(ctx, {
  type: 'horizontalBar',
  data: data,
  options: options
});