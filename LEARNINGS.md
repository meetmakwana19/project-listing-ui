### 1. While deploying the frontend on vercel, accessing `/about` endpoint was giving error on web page : 
```bash
vercel 404: NOT_FOUND Code: NOT_FOUND
```
- Solved it by adding a `vercel.json` file and configuring the file. [ref](https://stackoverflow.com/a/75904914/17796286)

---

### 2. Unique key prop warnings in dev console : 
```bash 
Warning: Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.
    at ProjectList 
```
- So sometimes this issue will still persist even if there are no List elements in the component or even when they're taken care of by giving a unique `key={}` prop into it. 
- Now in the case of `components/ProjectList` component, the `map` method was return the empty react fragments like the following :
```javascript 
return (
    <>
        <Link key={index}>......</Link>
    </>
)
``` 
- Here, putting key in `Link` is not sufficient as react fragments are getting returned so need to give unique key to it as well like the following : 
```javascript
return (
    <React.Fragment key={index}>
        <Link key={index}>......</Link>
    </React.Fragment>
)
``` 

---

### 3. Lookout for warnings like `<div> cannot appear as descendent of <p>`.

---

### 4. Warning - 
```javascript
react-dom.development.js:86 Warning: 
Received the string `true` for the boolean attribute `required`. 
Although this works, it will not work as expected if you pass the string "false". 
Did you mean required={true}?
```
But then dont even use true as 'Value must be omitted for boolean attributes' so just use `required`.

---

### 5. For the eslist warning of `A form label must be associated with a control.` :
```javascript
            <label
              htmlFor="title"
              className="block text-gray-700 stext-sm font-bold mb-2"
            >
              Project Title
              <input
                type="text"
                id="title"
                placeholder="Enter Project title"
              />
            </label>
```
Put `<input>` inside `<label>` and also add `htmlFor` attribute with matching `id`.

---

### 6. ESLint warnings : 
```javascript
Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element.

Visible, non-interactive elements with click handlers must have at least one keyboard listener.eslintjsx-a11y/click-events-have-key-events
```
For this code :
```javascript
        <div
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
```
So added the following and got rid of the 1st warning
```javascript
role="button"
tabIndex={0}
```
Then added on `onKeyDown` method like :
```javascript
        <div
          role="button"
          tabIndex={0}
        //   onClick={handleClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleClick();
            }
          }}
          style={{ cursor: 'pointer' }}
        >

```

### 7. ESLint warning :

```javascript
The object passed as the value prop to the Context provider changes every render. To fix this consider wrapping it in a useMemo hook.
```
So wrapped it in a `useMemo` hook :
```javascript
  const contextValue = useMemo(() => ({ userData, setUserData }), [userData]);

  return (
    <StepperContext.Provider value={contextValue}>
      {children}
    </StepperContext.Provider>
  );
```

8. ESLint warning :

```javascript
Visible, non-interactive elements with click handlers must have at least one keyboard listener.
eslint
(jsx-a11y/click-events-have-key-events)
```
- The error message you're seeing is an ESLint (a popular JavaScript linter) error related to accessibility (`a11y`) best practices. 
- The purpose of this rule is to ensure that interactive elements on a web page are accessible to users who might not be able to use a mouse or other pointing devices. By adding keyboard event listeners, you allow users who navigate your website using a keyboard or assistive technologies to interact with the element as well.
- To fix this issue, you can add a keyboard event listener to the `<li>` element that corresponds to the click handler you have already defined. This way, users will be able to interact with the element both via mouse clicks and keyboard actions.
```javascript
                <li
                  key={index}
                  onClick={() => setMobileNav(!mobileNav)}
                  onKeyPress={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setMobileNav(!mobileNav);
                    }
                  }}
                >
```
- The fix over the `<li>` was followed by the following warning :
```javascript
Non-interactive elements should not be assigned mouse or keyboard event listeners.
eslintjsx-a11y/
(no-noninteractive-element-interactions)
```
- So attach the event listener to an interactive element instead of the non-interactive `<li>` element. So did the following : 
```javascript
                <li key={index}>
                  <Link
                    to={navigation.path}
                    className="mobile-item"
                    onClick={() => setMobileNav(!mobileNav)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        setMobileNav(!mobileNav);
                      }
                    }}
                  >
                    {navigation.name}
                  </Link>
                </li>
```