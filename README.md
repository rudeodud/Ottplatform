# OTT Infrastructure (Terraform)
 
AWS 위에 OTT 서비스 인프라를 Terraform으로 구성한 프로젝트입니다.
 
---
 
## 📁 프로젝트 구조
 
```
OTT/
├── main.tf              # 메인 리소스 정의
├── provider.tf          # AWS 프로바이더 설정
├── variables.tf         # 변수 선언
├── terraform.tfvars     # 변수 값 (git 제외)
├── .gitignore
└── README.md
```
 
---
 
## 🏗️ 인프라 구성
 
```
인터넷
  ↕
Internet Gateway
  ↕
Public Subnet (ap-northeast-2a / 2b)
  ├── EC2 (Nginx)
  └── NAT Gateway
        ↕
Private Subnet (ap-northeast-2a / 2b)
  └── RDS MySQL 8.0
```
 
### 생성되는 리소스
 
| 리소스 | 이름 | 설명 |
|---|---|---|
| VPC | ott_vpc | 전체 네트워크 |
| Public Subnet | Ott_public_subnet1/2 | EC2, NAT GW 위치 |
| Private Subnet | Ott_private_subnet1/2 | RDS 위치 |
| Internet Gateway | Ott_igw | 인터넷 연결 |
| NAT Gateway | Ott | Private → 인터넷 |
| EC2 | Ott_Ec2_instance | Nginx 웹서버 |
| RDS | ott-db-instance | MySQL 8.0 DB |
| Security Group | ott-sg | EC2 보안 그룹 |
| Security Group | ott-rds-sg | RDS 보안 그룹 |
 
---
 
## ⚙️ 사전 준비
 
### 1. Terraform 설치
```bash
brew install terraform      # macOS
```
 
### 2. AWS CLI 설치 및 설정
```bash
brew install awscli
aws configure
```
 
### 3. terraform.tfvars 파일 생성
```hcl
aws_region       = "ap-northeast-2"
ami_id           = "ami-xxxxxxxxxxxxxxxxx"
instance_type    = "t2.micro"
key_name         = "your-key-name"
private_key_path = "/path/to/your-key.pem"
vpc_cidr_block   = "10.0.0.0/16"
db_username      = "admin"
db_password      = "yourpassword"
```
 
> ⚠️ `terraform.tfvars` 는 `.gitignore` 에 포함되어 있습니다. 절대 GitHub에 올리지 마세요!
 
---
 
## 🚀 배포 방법
 
```bash
# 1. 초기화
terraform init
 
# 2. 플랜 확인
terraform plan
 
# 3. 배포
terraform apply
 
# 4. 삭제
terraform destroy
```
 
---
 
## 🔒 보안 그룹 규칙
 
### EC2 (ott-sg)
| 방향 | 포트 | 설명 |
|---|---|---|
| Inbound | 22 | SSH |
| Inbound | 80 | HTTP |
| Inbound | 443 | HTTPS |
| Outbound | ALL | 전체 허용 |
 
### RDS (ott-rds-sg)
| 방향 | 포트 | 설명 |
|---|---|---|
| Inbound | 3306 | EC2에서만 접근 허용 |
| Outbound | ALL | 전체 허용 |
 
---
 
## 🌐 웹서버 (Nginx)
 
EC2 생성 시 user_data 로 Nginx 자동 설치됩니다.
 
```bash
# Nginx 상태 확인
sudo systemctl status nginx
 
# Nginx 시작
sudo systemctl start nginx
```
 
브라우저에서 `http://EC2_퍼블릭IP` 로 접속 가능합니다.
 
---
 
## 🗄️ DB 연결
 
EC2 에서 RDS MySQL 연결:
 
```bash
# MySQL 클라이언트 설치
sudo dnf install -y mariadb105
 
# RDS 연결
mysql -h <RDS_엔드포인트> -u admin -p
```
 
---
 
## 📌 변수 목록
 
| 변수명 | 타입 | 설명 |
|---|---|---|
| `aws_region` | string | AWS 리전 |
| `ami_id` | string | EC2 AMI ID |
| `instance_type` | string | EC2 인스턴스 타입 |
| `key_name` | string | 키 페어 이름 |
| `private_key_path` | string | 프라이빗 키 경로 |
| `vpc_cidr_block` | string | VPC CIDR 블록 |
| `db_username` | string | RDS 유저 이름 |
| `db_password` | string | RDS 비밀번호 (sensitive) |
 
---
 
## ⚠️ 주의사항
 
- `terraform.tfvars` 와 `*.pem` 파일은 절대 GitHub에 올리지 마세요
- RDS `publicly_accessible = false` 로 외부 접근 차단되어 있습니다
- NAT Gateway는 비용이 발생합니다. 사용하지 않을 때는 `terraform destroy` 로 삭제하세요