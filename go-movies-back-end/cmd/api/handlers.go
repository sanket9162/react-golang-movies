package main

import (
	"fmt"
	"net/http"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request){
	fmt.Fprint(w, "Hello Work from %s", app.Domain)
}