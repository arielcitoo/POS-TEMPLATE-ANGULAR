export interface Category{
    categoryId: number;
    name: string;
    description: string;  
    AuditCreateDate: Date;
    State:number
    StateCategory: string  
} 
export interface CategoryApi{
    data: any
    totalRecords: number
}