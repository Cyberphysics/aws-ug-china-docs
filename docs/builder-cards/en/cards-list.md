# Cards List

Complete list and detailed descriptions of all cards in AWS Builder Cards.

## Compute Service Cards

### Amazon EC2
- **Type**: Compute Service
- **Cost**: 3 Resource Points
- **Description**: Elastic cloud computing service providing scalable virtual servers
- **Special Ability**: Can combine with EBS volumes for extra points
- **Best Practice**: Use with Auto Scaling

### AWS Lambda
- **Type**: Serverless Compute
- **Cost**: 2 Resource Points
- **Description**: Event-driven serverless computing service
- **Special Ability**: Gains "Serverless Architecture" bonus when combined with API Gateway
- **Best Practice**: Suitable for short-running tasks

### Amazon ECS
- **Type**: Container Service
- **Cost**: 4 Resource Points
- **Description**: Fully managed container orchestration service
- **Special Ability**: Can run multiple application containers
- **Best Practice**: Use with Application Load Balancer

## Storage Service Cards

### Amazon S3
- **Type**: Object Storage
- **Cost**: 2 Resource Points
- **Description**: Highly scalable object storage service
- **Special Ability**: Can host static websites
- **Best Practice**: Use with CloudFront for global distribution

### Amazon EBS
- **Type**: Block Storage
- **Cost**: 1 Resource Point
- **Description**: High-performance block storage service
- **Special Ability**: Must be attached to EC2 instances
- **Best Practice**: Choose appropriate volume type

### Amazon EFS
- **Type**: File Storage
- **Cost**: 3 Resource Points
- **Description**: Fully managed NFS file system
- **Special Ability**: Can be mounted to multiple EC2 instances simultaneously
- **Best Practice**: Suitable for applications requiring shared storage

## Database Service Cards

### Amazon RDS
- **Type**: Relational Database
- **Cost**: 4 Resource Points
- **Description**: Managed relational database service
- **Special Ability**: Supports multiple database engines
- **Best Practice**: Enable Multi-AZ deployment

### Amazon DynamoDB
- **Type**: NoSQL Database
- **Cost**: 3 Resource Points
- **Description**: Fast and flexible NoSQL database
- **Special Ability**: Gains "Serverless" bonus when combined with Lambda
- **Best Practice**: Design partition keys properly

### Amazon ElastiCache
- **Type**: In-Memory Cache
- **Cost**: 2 Resource Points
- **Description**: In-memory data store and cache service
- **Special Ability**: Significantly improves application performance
- **Best Practice**: Use with RDS

## Network Service Cards

### Amazon VPC
- **Type**: Virtual Network
- **Cost**: 1 Resource Point
- **Description**: Virtual Private Cloud network
- **Special Ability**: Basic requirement for most services
- **Best Practice**: Plan subnets and routing properly

### Application Load Balancer
- **Type**: Load Balancer
- **Cost**: 2 Resource Points
- **Description**: Application layer load balancer
- **Special Ability**: Provides high availability bonus
- **Best Practice**: Use with multiple EC2 instances

### Amazon CloudFront
- **Type**: CDN
- **Cost**: 2 Resource Points
- **Description**: Global content delivery network
- **Special Ability**: Gains "Global Distribution" bonus when combined with S3
- **Best Practice**: Cache static content

## Action Cards

### Auto Scaling
- **Type**: Optimization Action
- **Effect**: Provides elastic scaling capability for EC2 instances
- **Bonus**: +2 points

### IAM Role Configuration
- **Type**: Security Action
- **Effect**: Configure appropriate permissions for services
- **Bonus**: +3 points

### CloudWatch Monitoring
- **Type**: Monitoring Action
- **Effect**: Add monitoring capability to architecture
- **Bonus**: +2 points

### Backup Strategy
- **Type**: Reliability Action
- **Effect**: Add backup for data services
- **Bonus**: +3 points

## Special Combination Bonuses

### Three-Tier Architecture (+10 points)
- Web Tier: CloudFront + S3
- Application Tier: ALB + EC2
- Data Tier: RDS + ElastiCache

### Serverless Architecture (+8 points)
- API Gateway + Lambda + DynamoDB

### Microservices Architecture (+12 points)
- ECS + ALB + RDS + ElastiCache

### High Availability Architecture (+15 points)
- Multi-AZ deployment + Load Balancing + Auto Scaling