package main

import (
	"encoding/json"
	"errors"
	"net/http"
)

type JSONResponse struct {
	Error bool `json:"error"`
	Message string `json:"message"`
	Data interface{} `josn:"data,omitempty"`
}

func (app *application) writeJSON(w http.ResponseWriter, status int, data interface{}, headers ...http.Header) error {
	out, err := json.Marshal(data)
	if err != nil {
		return err 
	}
	 if len(headers) > 0 {
		for key, value := range headers[0] {
			w.Header()[key] = value
		}
	 }

	 w.Header().Set("Content-Type", "application/json")
	 w.WriteHeader(status)
	 _, err = w.Write(out)
	 if err != nil {
		return err
	 }
	 return nil
}

func (app *application) readJSON(w http.ResponseWriter, r *http.Request, data interface{}) error{
	maxBytes := 1024 * 1024 // one megabytes
	r.Body = http.MaxBytesReader(w, r.Body, int64(maxBytes))
	
	dec := json.Decoder(r.Body)

	dec.DisallowUnknowsFields()

	err := dec.Decode(data)
	if err != nil{
		return err
	}

	err = dec.Decode(&struct{}{})
	if err != nil{
		return errors.New("Body must only contain a single JSON value")
	}
	 return nil
}	