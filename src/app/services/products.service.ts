import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, throwError} from "rxjs";
import {IProduct} from "../models/product";
import {ErrorServices} from "./error.services";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorServices
  ) {
  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      // params: new HttpParams().append('limit', 5)
      params: new HttpParams({
        // fromString: 'limit=5'
        fromObject: {limit : 5}
      })
      }).pipe(
      delay(200),
      retry(2),
      catchError(this.errorHandler.bind(this))
    )
  }

  create(product: IProduct) : Observable<IProduct> {
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
  }

  private errorHandler(error :HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
