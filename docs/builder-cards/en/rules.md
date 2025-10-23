# Detailed Game Rules

## Basic Concepts

### Architecture Building
The core of AWS Builder Cards is building cloud architectures. Players need to:
- Choose appropriate AWS services
- Establish connections between services
- Optimize architecture performance and cost
- Ensure security and reliability

### Resource Management
Each player has limited resources to deploy services:
- **Compute Resources**: For deploying EC2, Lambda, and other compute services
- **Storage Resources**: For deploying S3, EBS, and other storage services
- **Network Resources**: For establishing VPC, load balancers, and other network services

## Detailed Rules

### Card Deployment
1. **Cost Check**: Ensure sufficient resources to deploy the service
2. **Dependency Check**: Some services require other services as prerequisites
3. **Region Restrictions**: Some services can only be deployed in specific regions

### Service Connections
- **Direct Connection**: Two services can communicate directly
- **Network Connection**: Connect through VPC, subnets, and other network services
- **API Connection**: Connect through API Gateway and other services

### Special Rules

#### High Availability
- Deploying the same service in multiple availability zones grants high availability bonus
- Using load balancers improves architecture stability

#### Security Best Practices
- Properly configure IAM roles and policies
- Use VPC and security groups to protect resources
- Enable encryption and monitoring services

#### Cost Optimization
- Use Reserved Instances and Spot Instances
- Choose appropriate storage types
- Implement auto-scaling

## Winning Strategies

### Early Game Strategy
- Establish basic network architecture (VPC, subnets)
- Deploy core compute and storage services
- Ensure basic security configuration

### Mid Game Strategy
- Expand service portfolio
- Establish inter-service connections
- Implement monitoring and logging

### Late Game Strategy
- Optimize architecture performance
- Implement advanced security measures
- Complete complex architecture patterns

## Common Architecture Patterns

### Three-Tier Architecture
1. **Presentation Tier**: CloudFront + S3
2. **Application Tier**: ALB + EC2/ECS
3. **Data Tier**: RDS + ElastiCache

### Microservices Architecture
1. **API Gateway**: API Gateway
2. **Service Discovery**: ECS Service Discovery
3. **Data Storage**: DynamoDB + S3

### Serverless Architecture
1. **Compute**: Lambda functions
2. **Storage**: S3 + DynamoDB
3. **Integration**: EventBridge + SQS