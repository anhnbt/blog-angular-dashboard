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

# Update
ng update @angular/core@14 @angular/cli@14