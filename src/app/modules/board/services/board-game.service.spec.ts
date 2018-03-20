import { TestBed, inject } from '@angular/core/testing';

import { BoardGameService } from './board-game.service';

describe('BoardGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardGameService]
    });
  });

  it('should be created', inject([BoardGameService], (service: BoardGameService) => {
    expect(service).toBeTruthy();
  }));

  it('should generate cards', inject([BoardGameService], (service: BoardGameService) => {
    expect(service.restart(16));
    expect(service.getCards().length).toBe(16);
    expect(() => service.restart(15)).toThrow();
  }));
});
