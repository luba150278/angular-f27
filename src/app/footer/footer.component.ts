import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() themeFooter: string = 'light';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['themeFooter'] && !changes['themeFooter'].isFirstChange()) {
      // Тут ви можете оновити ваші стилі або класи на основі нового значення themeFooter
    }
  }
}
