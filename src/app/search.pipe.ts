import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(value: any[], searchText: string): any {
    debugger
    // Check if the array has objects or not
    if (!value || !value.length) {
        return [];
    }
    // Check if the filter is not an empty string
    if (!searchText) {
        return value;
    }
    // Convert filter value to lowercase for comparison
    searchText = searchText.toLowerCase();

    // Check whether filter value exists and the passed value is an array
    if (searchText && Array.isArray(value)) {
        // Assuming entire array has same keys in its objects, get an array of keys.
        const keyName = Object.keys(value[0]);
        // Traverse the array of keys and remove a key value pair with key as 'id'
        keyName.forEach((element, index) => {
            if (element.toLowerCase() === 'id') {
                keyName.splice(index, 1);
            }
        });
        const keys = keyName;
        // Logic to go through all the objects and find the objects whose value matches lowercased filter.
        value = (value.filter((v) => v && keys.some(
            (k) => v[k] === undefined || v[k] === null ? false : v[k].toString().toLowerCase().indexOf(searchText) >= 0))
        );
        return value;
    }
}
}
