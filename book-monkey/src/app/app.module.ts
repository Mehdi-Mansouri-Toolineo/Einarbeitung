import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    HttpClientModule,
    AdminModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
