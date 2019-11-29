import { validateGithubHandle } from '@rosey/utils'
import { githubHandleValidation } from '@rosey/constants'

describe('validateGithubHandle utility', () => {
  const validationMethod = handle => validateGithubHandle(handle, githubHandleValidation)

  test('given an invalid user handle returns false', () => {
    const invalidHandles = ['-0987654321', 'abcdef-', '123--abc', '-abc-def--123-']
    const allHandlesAreValid = invalidHandles.every(validationMethod)

    expect(allHandlesAreValid).toBeFalsy()
  })

  test('given a valid user handle returns true', () => {
    const validHandles = ['0987654321', 'abcdef', '123-abc', 'abc-def-123']
    const allHandlesAreValid = validHandles.every(validationMethod)

    expect(allHandlesAreValid).toBeTruthy()
  })
})
