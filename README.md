# angular11-starter
Starter project of Angular 11, including @ngneat/transloco, ESLint, Angular Material, HTTPS development start and so on.

- Angular Material;
- @ngneat/transloco;
- Angular-ESLint;
- HTTPS development start via SSL;
- Unit Tests Enablement;


## Angular Material

Add the Material library:   

```PowerShell
ng add @angular/material
```


## HTTPS support via SSL

Copy folder **ssl** to root.

Add script to package.json:   

```javascript
  "start": "ng serve --ssl true -o --sslKey ssl/server.key --sslCert ssl/server.crt",
```


## Use Transloco

Adding @ngneat/transloco for adding JSON based translation.

```PowerShell
ng add @ngneat/transloco
```

Support Unit Testing

## Use Angular-ESLint replace TSLint

3 Steps:   


```PowerShell
ng add @angular-eslint/schematics
```

```PowerShell
ng g @angular-eslint/schematics:convert-tslint-to-eslint angular11-starter
```


```PowerShell
npm uninstall tslint
```

Also, delete the tslint.json.

