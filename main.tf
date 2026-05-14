# AWS VPC, Subnet, Internet Gateway, Route Table, and Route Table Association resources
resource "aws_vpc" "ott_vpc" {
    cidr_block = var.vpc_cidr_block
}



# AWS Subnet resources for public and private subnets in different availability zones
resource "aws_subnet" "Ott_public_subnet1" {
    vpc_id = aws_vpc.ott_vpc.id
    cidr_block = "0.0.0.0/24" 
    availability_zone = "ap-northeast-2a"
}

resource "aws_subnet" "Ott_public_subnet2" {
    vpc_id = aws_vpc.ott_vpc.id
    cidr_block = "0.0.1.0/24"
    availability_zone = "ap-northeast-2b"
}

resource "aws_subnet" "Ott_private_subnet1" {
    vpc_id = aws_vpc.ott_vpc.id
    cidr_block = "0.0.2.0/24"
    availability_zone = "ap-northeast-2a"
}
resource "aws_subnet" "Ott_private_subnet2" {
    vpc_id = aws_vpc.ott_vpc.id
    cidr_block = "0.0.3.0/24"
    availability_zone = "ap-northeast-2b"
}



# AWS Elastic IP resource for the NAT Gateway
resource "aws_eip" "Ott_nat_eip" {
    domain = "vpc"
}



# AWS Internet Gateway resource for the VPC
resource "aws_internet_gateway" "Ott_igw" {
    vpc_id = aws_vpc.ott_vpc.id
}

resource "aws_nat_gateway" "Ott" {
    allocation_id = aws_eip.Ott_nat_eip.id
    subnet_id = aws_subnet.Ott_public_subnet1.id
}



# AWS Route Table resources for public and private subnets, and their associations
resource "aws_route_table" "ott_public_route_table" {
    vpc_id = aws_vpc.ott_vpc.id

    route {
        cidr_block = "0.0.0.0/0"
        gateway_id = aws_internet_gateway.Ott_igw.id
    }
}

resource "aws_route_table" "ott_private_route_table1" {
    vpc_id = aws_vpc.ott_vpc.id
    route {
        cidr_block = "0.0.0.0/0"
        nat_gateway_id = aws_nat_gateway.Ott.id
    }
}

resource "aws_route_table" "ott_private_route_table2" {
    vpc_id = aws_vpc.ott_vpc.id
    route {
        cidr_block = "0.0.0.0/0"
        nat_gateway_id = aws_nat_gateway.Ott.id
    }
}




# AWS Route Table Association resources to associate the route tables with the respective subnets
resource "aws_route_table_association" "ott_public_subnet1" {
    subnet_id = aws_subnet.Ott_public_subnet1.id
    route_table_id = aws_route_table.ott_public_route_table.id  
}

resource "aws_route_table_association" "ott_public_subnet2" {
    subnet_id = aws_subnet.Ott_public_subnet2.id
    route_table_id = aws_route_table.ott_public_route_table.id  
}

resource "aws_route_table_association" "ott_private_subnet1" {
    subnet_id = aws_subnet.Ott_private_subnet1.id
    route_table_id = aws_route_table.ott_private_route_table1.id
}

resource "aws_route_table_association" "ott_private_subnet2" {
    subnet_id = aws_subnet.Ott_private_subnet2.id
    route_table_id = aws_route_table.ott_private_route_table2.id
}