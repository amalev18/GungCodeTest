import{ Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterByPipe implements PipeTransform{
  transform(value: string[], filterString: string): string[] {
    const resultatArray: string[] = [];
    if(value.length === 0 || filterString === ""){
      return value;
    }
    
    for(const item of value){
      if(item.toLowerCase().includes(filterString.toLowerCase())){
        resultatArray.push(item)
      }
    }
    return resultatArray;

  }

} 