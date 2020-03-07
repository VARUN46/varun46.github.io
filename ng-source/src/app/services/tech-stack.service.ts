import { Injectable } from '@angular/core';
import { techStack } from '../entities/techStack';

@Injectable({
  providedIn: 'root'
})
export class TechStackService {

  constructor() { }

  public getTechnologyStack(): techStack[]{
    const techListData :techStack[] = [];
    const stack1: techStack = new techStack();
    stack1.title = "Languages";
    stack1.dataItems = [];
    stack1.dataItems.push("C#");
    stack1.dataItems.push("Javascript");
    stack1.dataItems.push("Typescript");
    techListData.push(stack1); 
   
    const stack2: techStack = new techStack();
    stack2.title = "Frameworks";
    stack2.dataItems = [];
    stack2.dataItems.push("ASP.NET MVC 5 / ASP.NET Core MVC");
    stack2.dataItems.push("ASP.NET Web API 2 / REST");
    stack2.dataItems.push("Angular 8 with CLI");
    techListData.push(stack2); 
   
   
    const stack3: techStack = new techStack();
    stack3.title = "Databases and ORM";
    stack3.dataItems = [];
    stack3.dataItems.push("SQL Server / T-SQL");
    stack3.dataItems.push("Entity Framework");
    stack3.dataItems.push("ADO.NET");
    techListData.push(stack3); 
   

    const stack4: techStack = new techStack();
    stack4.title = "SCM";
    stack4.dataItems = [];
    stack4.dataItems.push("TFS");
    stack4.dataItems.push("GIT");
    techListData.push(stack4); 
   

    return techListData;
  }

}
