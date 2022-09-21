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

    // [HttpGet]
    // public async Task<ActionResult<Location>> GetLocation(int id)
    // {
    //     var location = await _context.locations.FindAsync(id);
    //     if (location == null)
    //     {
    //         return null;
    //     }
    //     return location;
    // }

    [HttpPost]
    public async Task<ActionResult<Location>> PostNote(Location loc)
    {
        Console.WriteLine(loc);
        _context.locations.Add(loc);
        await _context.SaveChangesAsync();
        return CreatedAtAction("", new {id = loc.id}, loc);
    }
}
