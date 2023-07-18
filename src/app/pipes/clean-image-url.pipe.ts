import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'cleanImageUrl',
})
export class CleanImageUrlPipe implements PipeTransform {
   transform(url: string): string {

      if (url.includes('linear'))
      {
         const splitted = url.split('url')[1];
         return splitted.substring(1, splitted.length - 1);
      }

      else return url;

   }
}
