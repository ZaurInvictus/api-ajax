# Lecture Outline:
 - What is an API, why do we use them?
 - Who is JSON?
 - What is AJAX?

 API DOCS
 https://randomuser.me/


 - How is AJAX different from tradition req/res cycle?
  // AJAX LOADS DATA WITHOUT REFRESHING BROWSER

 With an ajax request, the current window/document is unaffected and javascript code can examine the results of the request and do what it wants to with those results (insert HTML dynamically into the page, parse JSON and use it the page logic, parse XML, etc...).

The server doesn't do anything different - it's just in how the client treats the response from the two requests.