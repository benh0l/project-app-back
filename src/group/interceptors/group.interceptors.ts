import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { merge, Observable, of } from 'rxjs';
import { filter, flatMap, map, tap } from 'rxjs/operators';
import { ServerResponse } from 'http';
import { FastifyReply } from 'fastify';

@Injectable()
export class GroupInterceptor implements NestInterceptor {
  /**
   * Class constructor
   * @param _logger
   */
  constructor(private readonly _logger: Logger) {
  }

  /**
   * Intercepts all HTTP requests and responses
   *
   * @param context
   * @param next
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const cls = context.getClass();
    const handler = context.getHandler();
    const response: FastifyReply<ServerResponse> = context.switchToHttp().getResponse<FastifyReply<ServerResponse>>();
    const logCtx: string = `GroupInterceptor => ${cls.name}.${handler.name}`;

    return next.handle()
      .pipe(
        map(_ => of(_)),
        flatMap((obs: Observable<any>) =>
          merge(
            obs
              .pipe(
                filter(_ => !!_),
                map(_ => _),
              ),
            obs
              .pipe(
                filter(_ => !_),
                tap(_ => response.status(204)),
                map(_ => _),
              ),
          )),
        tap(
          _ => this._logger.log(!!_ ? _ : 'NO CONTENT', logCtx),
          _ => this._logger.error(_.message, JSON.stringify(_), logCtx),
        ),
      );
  }
}
