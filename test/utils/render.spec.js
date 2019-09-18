import React from 'react';
import {renderIf} from 'src/utils/render';

describe('render', () => {

  it('returns elem when the condition is true', () => {
    const mockElem = <div></div>;
    expect(renderIf(true, mockElem)).toEqual(mockElem);
  });

  it('returns null when the condition is false', () => {
    expect(renderIf(false)).toEqual(null);
  });

  it('by default returns null', () => {
    expect(renderIf(null)).toEqual(null);
  });

});
