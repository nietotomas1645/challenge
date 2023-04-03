import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Esta semana',
                    backgroundColor: documentStyle.getPropertyValue('--bs-cyan'),
                    borderColor: documentStyle.getPropertyValue('--bs-cyan'),
                    data: [65.22, 59.422, 80.378, 81.734, 56.634, 55.641, 40.793]
                },
                {
                    label: 'Semana pasada',
                    backgroundColor: documentStyle.getPropertyValue('--bs-primary-text'),
                    borderColor: documentStyle.getPropertyValue('--bs-primary-text'),
                    data: [28.425, 48.525, 40.346, 19.567, 86.324, 27.678, 90.344]
                }
            ]
        };
        this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary,
                      font: {
                          weight: 500
                      }
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }

          }
      };
  }
}


