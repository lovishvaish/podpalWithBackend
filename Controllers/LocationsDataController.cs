using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using reactnet.Data;
using reactnet.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace reactnet.Controllers;

//[Authorize]
[ApiController]
[Route("api/[controller]")]
public class LocationsDataController : ControllerBase
{

    private readonly MyDbContext _context;

    public LocationsDataController(MyDbContext context)
    {
        _context = context;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Location>>> GetLocations()
    {
        return await _context.locations.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Location>> PostNote(string id, string latitude, string longitude)
    {
        var loc = new Location 
        {
            id =   Int32.Parse(id),
            longitude = Int32.Parse(longitude),
            latitude= Int32.Parse(latitude)
        };
        Console.WriteLine(loc);
        _context.locations.Add(loc);
        await _context.SaveChangesAsync();
        return CreatedAtAction("", new {id = loc.id}, loc);
    }
}
