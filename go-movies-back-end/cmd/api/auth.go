package main

import (
	"fmt"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

type Auth struct{
	Issuer string
	Audience string
	Secret string
	TokenExpiry time.Duration
	RefreshExpiry time.Duration
	CookieDomain string
	CookiePath string
	CookieName string
}

type jwtUser struct{
	ID int `json:"id"`
	FirstName string `json:"first_name"`
	LastName string `json:"last_name"`
}

type TokenPairs struct{
	Token string `json:"access_token"`
	RefreshToken string `json:"refresh_token"`
}

type Claims struct {
	jwt.RegisteredClaims
}

func (j *Auth) GenerateTokenPair(user *jwtUser) (TokenPairs, error){

	// Create a token 
	token :=jwt.New(jwt.SigningMethodHS256)

	// Set the claims
	claims := token.Claims.(jwt.MapClaims)
	claims["name"] = fmt.Sprintf("%s %s", user.FirstName, user.LastName)
	claims["sub"] = fmt.Sprint(user.ID)
	claims["aud"] = j.Audience
	claims["iss"] = j.Issuer
	claims["iat"] = time.Now().UTC().Unix()
	claims["typ"] = "JWT"

	// Set the expory for JWT
	claims["exp"] = time.Now().UTC().Add(jwt.TimePrecision).Unix()

	// Create a signed token 
	signedAccessToken, err := token.SignedString([]byte(j.Secret))
	if err != nil{
		return TokenPairs{}, err
	}

	// Create a refresh token and set claims
	refreshToken := jwt.New(jwt.SigningMethodHS256)
	refreshTokenClaims := refreshToken.Claims.(jwt.MapClaims)
	refreshTokenClaims["sub"] = fmt.Sprint(user.ID)
	refreshTokenClaims["iat"] = time.Now().UTC().Unix()
	
	
	// Set the expiry for the refresh token 
	refreshTokenClaims["exp"] = time.Now().UTC().Add(j.RefreshExpiry).Unix()

	// Create signed refresh token 
	signedRefreshToken, err := refreshToken.SignedString([]byte(j.Secret))
	if err != nil{
		return TokenPairs{}, err
	}
	
	// Create TokenPairs and populate with signed tokens
	var tokenPairs = TokenPairs{
		Token: signedAccessToken,
		RefreshToken: signedRefreshToken,
	}

	//Return TokenPairs
	return tokenPairs, nil

} 