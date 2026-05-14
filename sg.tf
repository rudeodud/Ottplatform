# AWS Security Group resource for the OTT instances
resource "aws_security_group" "ott_Ec2_sg" {
  name        = "ott-sg"
  description = "Security group for OTT instances"
  vpc_id      = aws_vpc.ott_vpc.id
    ingress {
        description = "SSH access"
        from_port   = 22
        to_port     = 22
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    ingress {
        description = "HTTP access"
        from_port   = 80
        to_port     = 80
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    } 
    ingress {
        description = "HTTPS access"
        from_port   = 443
        to_port     = 443
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    egress {
        description = "Allow all outbound traffic"
        from_port   = 0
        to_port     = 0
        protocol    = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
}

resource "aws_security_group" "ott_rds_sg" {
  name        = "ott-rds-sg"
  description = "Security group for OTT RDS"
  vpc_id      = aws_vpc.ott_vpc.id

  ingress {
    description     = "MySQL"
    from_port       = 3306
    to_port         = 3306
    protocol        = "tcp"
    security_groups = [aws_security_group.ott_Ec2_sg.id]  # EC2에서만 접근 허용
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}