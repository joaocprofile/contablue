package persons

import (
	"errors"
	"strings"
	"time"
)

type Person struct {
	ID         string    `json:"id"`
	Customer   string    `json:"customer"`
	Provider   string    `json:"provider"`
	Document   string    `json:"document"`
	Name       string    `json:"name"`
	Cep        string    `json:"cep"`
	Address    string    `json:"address"`
	State      string    `json:"state"`
	City       string    `json:"city"`
	Complement string    `json:"complement"`
	Status     string    `json:"status"` // Active / Inactive
	CreatedAt  time.Time `json:"created_at,omitempty"`
}

func NewPerson() *Person {
	return &Person{}
}

func (p Person) Prepare() error {
	return p.validate()
}

func (p Person) validate() error {
	if p.Name == "" {
		return errors.New("Name is required")
	}
	if p.Customer == "" {
		return errors.New("Customer is required")
	}
	if p.Provider == "" {
		return errors.New("Provider is required")
	}
	p.formatFields()
	return nil
}

func (p *Person) formatFields() {
	p.Name = strings.TrimSpace(p.Name)
	p.Address = strings.TrimSpace(p.Address)
	p.State = strings.TrimSpace(p.State)
	p.City = strings.TrimSpace(p.City)
	p.Complement = strings.TrimSpace(p.Complement)
}
