export class Request
{
    headerData:Record<string | number,string>={};
    requestType:String="";
    dataObj:any=null;
    accesstoken:any=null;
    link:String=null;

    token(accesstoken:any):Request
    {
        this.accesstoken=accesstoken;
        return this;
    }

    header(key:string,value:any):Request
    {
        this.headerData[key]=value;
        return this;
    }
    data(data:any):Request
    {
        this.data=data;
        return this;
    }
    url(link:String):Request
    {
        this.link=link;
        return this;
    }
    json():Request
    {
        this.headerData['Content-Type']="Content-Type': 'application/json";
        this.requestType="json";
        return this;
    }
    text():Request
    {
        this.requestType="text";
        return this;
    }
    xml():Request
    {
        this.requestType="xml";
        this.headerData['Content-Type']="Content-Type': 'application/xml";
        return this;
    }

    serializeDataToUrl():string
    {
        let endpoint=this.link.toString();
        if (this.data) {
            let req: String = '';
            for (const key in this.data) {
              req += `${key}=${this.data[key]}&`;
            }
            endpoint +="?" + req;
        }
        return endpoint;
    }
}