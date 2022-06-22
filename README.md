# Azure DDNS
---

A nodejs application that gets your public IP and updates an Azure DNS zone to provide a dynamic DNS service.

<br/>

## Prereqs
---

1. Deploy a DNS Zone for your domain and add the nameservers to your registrar
2. Create an app registration in your Azure Tenant
3. Add a client secret to the app registration
4. Provide the app registration `Reader` over the resource group and `DNS Zone Contributor` over the DNS Zone

<br/>

## Required Environments
---

| Variable | Description |
| :-: | :-: |
| TENANT_ID | Tenant ID the DNS zone is deployed in (You can use one of [TENANT_ID or ARM_TENANT_ID or AZURERM_TENANT_ID])|
| CLIENT_ID | The client ID of the app registration (You can use one of [CLIENT_ID or ARM_CLIENT_ID or AZURERM_CLIENT_ID]) |
| CLIENT_SECRET | The client secret of the app registration (You can use one of [CLIENT_SECRET or ARM_CLIENT_SECRET or AZURERM_CLIENT_SECRET]) |
| ARM_TENANT_ID | Alias for TENANT_SECRET |
| ARM_CLIENT_ID | Alias for CLIENT_ID |
| ARM_CLIENT_SECRET | Alias for CLIENT_SECRET |
| AZURERM_TENANT_ID | Alias for TENANT_SECRET |
| AZURERM_CLIENT_ID | Alias for CLIENT_ID |
| AZURERM_CLIENT_SECRET | Alias for CLIENT_SECRET |
| SUBSCRIPTION_ID | Subscription ID where the DNS zone is located |
| RESOURCE_GROUP_NAME | Resource group where the DNS zone is located |
| DNS_ZONE | Azure DNS zone name |
| RECORD | @ or subdomain |