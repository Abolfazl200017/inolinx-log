import { MatPaginatorIntl } from "@angular/material/paginator";

export function CustomPaginator() {
    const customPaginatorIntl = new MatPaginatorIntl();
    
    customPaginatorIntl.getRangeLabel = getRangeLabel;

    return customPaginatorIntl;
}
function getRangeLabel(page:number, pageSize:number, length:number):string{
    return `صفحه ${page+1} از ${length/pageSize}`;
} 