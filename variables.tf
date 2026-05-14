variable "aws_region" {
  type = string
}

variable "ami_id" {
  type = string
}

variable "instance_type" {
  type = string
}

variable "key_name" {
  type = string
}

variable "private_key_path" {
  type = string
}

variable "vpc_cidr_block" {
  type = string
}

variable "rds_type" {
  type = string
}

variable "rds_password" {
  type = string
  sensitive = true
}

variable "rds_username" {
  type = string
}

variable "rds_db_name" {
  type = string
}

variable "rds_allocated_storage" {
  type = number
}