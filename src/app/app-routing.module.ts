import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './paginas/blog/blog.component';
import { PostComponent } from './paginas/post/post.component';

const routes: Routes = [
    {path: 'blog', component: BlogComponent },
    {path: 'post/:id', component: PostComponent },
    {path: '', redirectTo: '/blog', pathMatch: 'full' },
    {path: '**', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
