package main

import (
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowAllOrigins = true

	router.Use(cors.New(config))

	router.GET("/data", getData)
	err := router.Run(":8080")
	if err != nil {
		fmt.Println(err)
	}
}

func getData(c *gin.Context) {
	var v data

	v.Co2 = 1337
	v.Luftfeuchtigkeit = 69.42

	c.IndentedJSON(http.StatusOK, v)
}

type data struct {
	Luftfeuchtigkeit float32 `json:"luftfeuchtigkeit"`
	Co2              int     `json:"co2"`
}
