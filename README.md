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

ng generate component auth
--signin (login)
--signup
--reset-password
--change-password
--profile-settings

ng build --prod --aot

# Update
ng update @angular/core@14 @angular/cli@14