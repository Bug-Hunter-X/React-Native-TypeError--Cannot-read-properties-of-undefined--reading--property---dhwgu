The solution involves using optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access properties. Optional chaining short-circuits if the object is null or undefined. The nullish coalescing operator provides a default value if the expression is null or undefined. 

```javascript
// Solution using optional chaining and nullish coalescing
const MyComponent = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserData().then(setUser);
  }, []);

  return (
    <View>
      <Text>{user?.name ?? 'Unknown'}</Text> // Safe access to user.name
    </View>
  );
};
```

This approach prevents the error by handling the case where `user` is null or undefined gracefully.  It either accesses `name` if `user` exists and is defined, or displays 'Unknown' if not.