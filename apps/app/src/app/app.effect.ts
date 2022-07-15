import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createAction } from '@ngrx/store';
import { fetch } from '@nrwl/angular';

const createTodo = createAction('Create todo');
const createTodoSuccess = createAction('Create todo success');

@Injectable()
class TodoEffects {
  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodo),
      fetch({
        run: (action) => createTodoSuccess,
      })
    )
  );

  constructor(private actions$: Actions) {}
}
