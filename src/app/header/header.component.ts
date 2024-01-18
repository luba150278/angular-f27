import { Component } from '@angular/core';
import { themes } from '../share/themes';
import { ThemeService } from '../services/theme.service';
import { LangService } from '../services/lang.service';
import { headerLinks, langs, links } from '../share/langs';
import { Subscription } from 'rxjs';

interface ILink {
  link: string;
  title: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  header_themes: string[] = themes;
  header_langs = langs;
  theme = 'light';
  lang = 'uk';

  arr_links: ILink[] = [];
  private langSubscription: Subscription;

  constructor(
    private themeService: ThemeService,
    private langService: LangService
  ) {
    this.theme = this.themeService.getTheme();
    this.langSubscription = this.langService.langChanged$.subscribe(
      (newLang) => {
        this.lang = newLang;
        this.arr_links = headerLinks[newLang].map((item, i) => {
          return {link: newLang + '/' + links[i], title: item}
        })
      }
    );
  }
  changeTheme(newTheme: string) {
    this.themeService.setTheme(newTheme);
    this.theme = this.themeService.getTheme();
  }

  changeLang(newLang: string) {
    this.langService.setLang(newLang);
    //this.theme = this.themeService.getTheme();
  }

  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }
}
