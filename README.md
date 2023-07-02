Use AWS App Runner, DynamoDB and CDK to deploy and run a Cloud native Go app and configure for automating deploying with Github Action 

        ┌───────────────────┐           ┌───────────────────┐           ┌──────────┐
        │                   │           │                   │           │          │
        │   AWS App Runner  │ ◄───────► │   Cloud-native    │ ◄───────► │   Go     │
        │                   │           │   Go App           │           │  App     │
        └───────────────────┘           │                   │           │          │
                                        └───────────────────┘           └──────────┘
                                                ▲
                                                │
                                                │
                                                │
                                    ┌───────────┴───────────┐
                                    │                       │
                                    │    Amazon DynamoDB    │
                                    │                       │
                                    └───────────────────────┘
                                                ▲
                                                │
                                                │
                                                │
                                    ┌───────────┴───────────┐
                                    │                       │
                                    │         CDK           │
                                    │                       │
                                    └───────────────────────┘
