package models

type User struct {
	ID        int    `json:"id"`
	FirstName string `josn:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
	Password  string `json:"password"`
	CreatedAt string `json:"-"`
	UpdateAt  string `json:"-"`
}
