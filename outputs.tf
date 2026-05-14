output "ec2_public_ip" {
  value = aws_instance.Ott_Ec2_instance.public_ip
}

output "rds_endpoint" {
  value = aws_db_instance.ott_db_instance.endpoint
}