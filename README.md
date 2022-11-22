# BlogAngularDashboard

ng generate module shared
cd shared/components/breadcrumbs
ng generate component navigation

cd /src/app/theme/layout
ng generate module admin --routing
ng generate component admin --module admin
cd ./admin
ng generate component navigation
ng generate component nav-bar
dashboard, blank page
--SHARED
ng generate component not-found
ng generate component response-message
ng generate component loader
---CORE
    ng generate service auth
    ng generate service http
    ng generate class app-settings
    ng generate guard auth
    ng generate guard un-auth


ng generate component auth
--signin (login)
--signup
--reset-password
--change-password
--profile-settings

ng build --prod --aot
ng build --configuration=staging

# Update
ng update @angular/core@14 @angular/cli@14

## Install CoreUI
```npm install @angular/cdk```

```npm install @coreui/angular@4```

```npm install @coreui/coreui```

```npm install @coreui/icons-angular```

```npm install @coreui/icons```
```npm install ngx-perfect-scrollbar```

## 👇️ delete node_modules and package-lock.json
rm -rf node_modules
rm -f package-lock.json

## 👇️ clean npm cache
npm cache clean --force

npm install
