BuiltIn pipe demo : 

<div >
  <p ngNonBindable>{{ dateVal | date: 'shortTime' }}</p> 
 <p>{{ todayDate | date: 'shortTime' }}</p>

 <p ngNonBindable>{{ dateVal | date:'fullDate' }}</p>
 <p>{{ todayDate | date: 'fullDate' | uppercase }}</p>

 <p ngNonBindable>{{ dateVal | date: 'd/M/y' }}</p>
 <p>{{ todayDate | date: 'd/M/y'  }}</p>
</div>

For custom pipe code : 
<!-- Import modules -->
 ReactiveFormsModule,
 FormsModule
 
 
  filteredString: string = '';

  users = [{
    name: 'Leela',
    joinedDate: new Date(15, 2, 2016)
  },
  {
    name: 'Rama',
    joinedDate: new Date(17, 3, 2019)
  },
  {
    name: 'Krishna',
    joinedDate: new Date(20, 4, 2019)
  },
  ];




<div class="container">
  <div class="row mb-2">
    <div class="col-md-6">
      <input type="text" class="form-control" [(ngModel)]="filteredString" />
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <div *ngFor="let user of users | search: filteredString" class="my-3">

        <div>Name: {{ user.name | shortName: 5 : 2}}</div>
        <div>
          Joined Date: {{ user.joinedDate | date: "fullDate" | lowercase }}
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Search pipe code :  -->
transform(value: any[], searchText: string): any {
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
<!-- Searching pipe code end -->

<!-- Shorten pipe code :  -->
    transform(value: any, limit: number) {
        if (value.length > limit) {
            return value.substr(0, limit) + ' ...';
        }
        return value;
    }

<!-- Shorten pipe code end -->

<!-- Pure vs Impure pipes link -->
https://www.geeksforgeeks.org/explain-pure-and-impure-pipe-in-angular/