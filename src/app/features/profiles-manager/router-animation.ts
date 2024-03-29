import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const transitionAnimation =
  trigger('routeAnimations', [
    transition('Profiles <=> Create', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],  { optional: true }),
      query(':enter', [
        style({ left: '-100%' }),
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' })),
        ], { optional: true }),
        query(':enter', [
          animate('200ms ease-out', style({ left: '0%' })),
        ], { optional: true }),
      ]),
      query(':enter', animateChild(), { optional: true }),
    ]),

    // transition('* <=> NewPage', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%',
    //     }),
    //   ], { optional: true }),
    //   query(':enter', [
    //     style({ left: '-100%' }),
    //   ], { optional: true }),
    //   query(':leave', animateChild(), { optional: true }),
    //   group([
    //     query(':leave', [
    //       animate('200ms ease-out', style({ left: '100%' })),
    //     ], { optional: true }),
    //     query(':enter', [
    //       animate('200ms ease-out', style({ left: '0%' })),
    //     ], { optional: true }),
    //   ]),
    //   query(':enter', animateChild(), { optional: true }),
    // ]),
  ]);
